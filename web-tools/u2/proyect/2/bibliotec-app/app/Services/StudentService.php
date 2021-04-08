<?php

namespace App\Services;

use App\Repositories\StudentRepository;
use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;

class StudentService
{
    /**
     *  @var $studentRepository
     */
    protected $studentRepository;

    /**
     * StudentService constructor
     *
     * @param StudentRepository $postRepository
     */
    public function __construct(StudentRepository $studenteRepository)
    {
        $this->studentRepository = $studenteRepository;
    }

    /**
     * Validate post data.
     * Store to DB if there are no errors.
     *
     * @param array $data
     * @return String
     */
    public function saveStudentData($data)
    {
        $validator = Validator::make($data, [
            'name' => 'required',
            'firstSurname' => 'required',
            'secondSurname' => 'required'
        ]);

        if ($validator->fails()) {
            throw new InvalidArgumentException($validator->errors()->first());
        }

        $result = $this->studentRepository->save($data);

        return $result;
    }
}
