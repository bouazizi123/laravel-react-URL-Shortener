<?php

// app/Http/Controllers/URLController.php

namespace App\Http\Controllers;

use App\Models\URL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class URLController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'long_url' => 'required|url',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Invalid URL'], 400);
        }

        // Generate a unique short code (You can use hashids or any other method)
        $shortCode = substr(md5(uniqid()), 0, 8);

        // Save the URL in the database
        $url = URL::create([
            'long_url' => $request->input('long_url'),
            'short_code' => $shortCode,
        ]);

        return response()->json(['short_url' => route('redirect', $shortCode)], 200);
    }

    public function redirectToLongURL($shortCode)
    {
        // Find the URL by the short code
        $url = URL::where('short_code', $shortCode)->first();

        if ($url) {
            // Increment the click count (You may need a separate Click model to record clicks)
            $url->clicks()->create();
            // Redirect the user to the long URL
            return redirect()->away($url->long_url);
        } else {
            return response()->json(['error' => 'Short URL not found'], 404);
        }
    }

    public function index()
    {
        // Fetch all URLs with click count
        $urls = URL::withCount('clicks')->get();
        return response()->json(['urls' => $urls], 200);
    }
}
