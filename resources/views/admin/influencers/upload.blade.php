
<h3>Upload Influencers CSV</h3>
@if (session('message'))
    <div class="alert alert-success">
        {{ session('message') }}
    </div>
@endif

@if (session('errors'))
    <div class="alert alert-success">
        {{ session('errors') }}
    </div>
@endif
    <hr/>

<form action="{{ route('admin.influencers.upload.store')}}" method="post" enctype="multipart/form-data">
    @csrf
    <label>Platform</label>
    <select name="platform">
        <option value="">select option</option>
        <option>twitter</option>
        <option>instagram</option>
    </select>
    <hr/>
    <label>Category</label>
    <select name="category">
        <option value="">select option</option>
        @foreach ($categories as $category)
                <option value={{$category->id}}>{{$category->name}}</option>            
        @endforeach
    </select>
    <hr/>

    <input type="file" name="file" accept="csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    <hr/>
    <button>Upload and import</button>
</form>