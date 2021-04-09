<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $table='persons';

    protected $fillable = array(
        'name', 'firstSurname', 'secondSurname',
        'age', 'major'
    );

    protected $hidden = ['created_at', 'updated_at'];

    /**
     * Get the book copies for the person
     */
    public function bookCopies()
    {
        return $this->hasMany(BookCopy::class);
    }
}
