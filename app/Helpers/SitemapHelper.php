<?php

namespace App\Helpers;

use App\Models\JobListing;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\SitemapIndex;

abstract class SitemapHelper
{
    public function __invoke()
    {
        $this->generateSitemap();
    }

    public function generateSitemap()
    {
        $this->pagesSitemap();

        SitemapIndex::create()
            ->add('/pages_sitemap.xml')
            ->add('/influencers_sitemap.xml')
            ->writeToFile(public_path('sitemap.xml'));
        // ->writeToDisk('public', 'sitemap.xml');        

        // return redirect('sitemap.xml');
    }

    private function pagesSitemap()
    {
        Sitemap::create()
            ->add(env('APP_URL'))
            ->add(route('explore'))
            ->add(route('about'))
            ->add(route('contact'))
            ->add(route('login'))
            ->add(route('register'))
            ->writeToDisk('public', 'pages_sitemap.xml');
    }

    private function jobsSitemap()
    {
        Sitemap::create()
            ->add(JobListing::all())
            ->writeToDisk('public', 'influencers_sitemap.xml');
    }
}
