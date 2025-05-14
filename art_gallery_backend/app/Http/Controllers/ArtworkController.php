<?php

namespace App\Http\Controllers;

use App\Models\Artwork;
use Illuminate\Http\Request;

class ArtworkController extends Controller
{
    public function index()
    {
        return Artwork::all(); // Tüm kayıtları getir
    }

    public function show($id){
        return Artwork::findOrFail($id); // Belirtilen id'ye sahip kaydı getir
    }

    public function store(Request $request)
    {
        $validated = $request ->validate([
            'name' => 'required',
            'description'=> 'nullable',
            'image' => 'required',
            'artist_id' => 'required',
        ]);
        return Artwork::create($validated); // Yeni kayıt oluştur
    }

    public function update(Request $request, $id)
    {
        $artwork = Artwork::findOrFail($id);
        $artwork->update($request->all()); // Belirtilen id'ye sahip kaydı güncelle
        return response()->json($artwork);
    }

    public function destroy($id)
    {
        Artwork::destroy($id); // Belirtilen id'ye sahip kaydı sil
        return response()->json(['message' => 'Artwork deleted successfully']);
    }
}
