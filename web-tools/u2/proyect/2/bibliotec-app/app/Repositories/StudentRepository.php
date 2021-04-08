<?php

namespace App\Repositories;

use App\Models\Student;


class StudentRepository
{
    /**
     * @var Student
     */
    protected $student;

    /**
     * PostRepository constructor
     *
     * @param Student $student
     */
    public function __construct(Student $student)
    {
        $this->student = $student;
    }

    /**
     * Get all students
     *
     * @return Student $student
     */
    public function getAll()
    {
        return $this->student->get();
    }

    /**
     * Get student by id
     *
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->student
            ->where('id', $id)
            ->get();
    }

    /**
     * Save Student
     *
     * @param $data
     * @return Student
     */
    public function save($data)
    {
        $student = new $this->student;
        $student->name = $data['name'];
        $student->firstSurname = $data['firstSurname'];
        $student->secondSurname = $data['secondSurname'];
        $student->save();
        return $student->fresh();
    }

    /**
     * Update Student
     * @param $data
     * @return Student
     */
    public function update($data, $id)
    {
        $student = $this->student->find($id);
        $student->name = $data['name'];
        $student->firstSurname = $data['firstSurname'];
        $student->secondSurname = $data['secondSurname'];
        $student->update();
        return $student;
    }

    /**
     * Delete Post
     *
     * @param $data
     * @return Student
     */
    public function delete($id)
    {
        $student = $this->post->find($id);
        $student->delete();

        return $student;
    }
}
