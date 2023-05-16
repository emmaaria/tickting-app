<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = DB::table('departments')->paginate(50);
        return Inertia::render(
            'Department/DepartmentList',
            [
                'departments' => $departments,
            ]
        );
    }

    public function create()
    {
        return Inertia::render('Department/DepartmentCreate');
    }

    public function store(Request $request): RedirectResponse
    {
        $validator = Validator::make($request->all(),
            [
                'title' => 'required',
            ]
        );
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
        $save = DB::table('departments')->insert(['title' => $request->title]);
        if ($save) {
            return redirect()->route('departments')->with('success', 'Successfully created');
        }else{
            return redirect()->back()->with('error', 'Something went wrong');
        }
    }
}
