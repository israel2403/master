<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookCopy extends Model
{
    use HasFactory;

    protected $table='book_copies';

    protected $fillable = array(
        'serial_number', 'bookshelf'
    );

    /**
     * Get the book copy that owns the user
     */
    public function person()
    {
        return $this->belongsTo(Person::class);
    }
}
