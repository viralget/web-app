<?php

namespace App\Http\Controllers;

use App\Http\Resources\ThreadsResource;
use App\Mail\InfluencerMessage;
use Carbon\Carbon;
use App\Models\Messenger\Message;
use App\Models\Messenger\Participant;
use App\Models\Messenger\Thread;
use App\Models\TwitterInfluencer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class MessagesController extends Controller
{


    protected $user;
    protected $messages;
    protected $thread;
    protected $participant;

    function __construct(Message $messages, Thread $thread, Participant $participant)
    {
        $this->messages = $messages;
        $this->thread = $thread;
        $this->participant = $participant;

        $this->middleware(function ($request, $next) {
            $this->user = $request->user();
            return $next($request);
        });
    }

    /**
     * Show all of the message threads to the user.
     *
     * @return mixed
     */
    public function index()
    {

        // $this->setPageTitle("Messages");


        // $threads = $this->thread->getUserThreads($this->user->id);

        return Inertia::render(
            'Messages/index'
            // , [
            //     'threads' => ThreadsResource::collection($threads)
            // ]
        );
    }

    /**
     * Shows a message thread.
     *
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        $threads = $this->thread->getUserThreads($this->user->id);

        $thread = Thread::findOrFail($id);

        $this->setPageTitle("Messages");

        if (!$thread) {
            return redirect()->route('messages')->withMessage('Message record not found');
        }

        $thread->markAsRead($this->user->id);

        $messages = $thread->messages();

        return Inertia::render('Users/Pages/Messages', [
            'threads' => ThreadsResource::collection($threads),
            'selected_thread' => $thread,
            'messages' => $messages->get()
        ]);
    }



    /**
     * Adds a new message to a current thread.
     *
     * @param $id
     * @return mixed
     */
    public function update(Request $request, $id)
    {
        $thread = Thread::findOrFail($id);

        if (!$thread) {
            return redirect()->route('messages')->withMessage('Message record not found');
        }

        // Message
        $this->messages->create([
            'thread_id' => $thread->id,
            'user_id' => $this->user->id,
            'body' => $request->message,
        ]);

        // Add replier as a participant
        // Consider to delete and ensure only participants can share message
        $participant = $this->participant->firstOrCreate([
            'thread_id' => $thread->id,
            'user_id' => $this->user->id,
        ]);

        $participant->last_read = new Carbon();
        $participant->save();

        return redirect()->back();
    }

    // /**
    //  * Creates a new message thread.
    //  *
    //  * @return mixed
    //  */
    // public function create()
    // {
    //     $users = User::where('id', '!=', Auth::id())->get();

    //     return view('messenger.create', compact('users'));
    // }

    // /**
    //  * Stores a new message thread.
    //  *
    //  * @return mixed
    //  */
    // public function store()
    // {
    //     $input = Request::all();

    //     $thread = Thread::create([
    //         'subject' => $input['subject'],
    //     ]);

    //     // Message
    //     Message::create([
    //         'thread_id' => $thread->id,
    //         'user_id' => Auth::id(),
    //         'body' => $input['message'],
    //     ]);

    //     // Sender
    //     Participant::create([
    //         'thread_id' => $thread->id,
    //         'user_id' => Auth::id(),
    //         'last_read' => new Carbon(),
    //     ]);

    //     // Recipients
    //     if (Request::has('recipients')) {
    //         $thread->addParticipant($input['recipients']);
    //     }

    //     return redirect()->route('messages');
    // }


    public function send(Request $request)
    {

        $request->validate([
            'message' => 'required',
            'influencer' => 'required',
        ]);


        $influencer = TwitterInfluencer::find($request->influencer);

        @Mail::to('paul.adewumi@viralget.com.ng')->send(new InfluencerMessage($influencer, $request->message));

        return true;
    }
}
