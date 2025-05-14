<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artwork extends Model
{
    protected $fillable = [
        'name',
        'description',
        'image',
        'artist_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
