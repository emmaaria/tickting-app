<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = DB::table('users')->whereNot('id', Auth::id())->paginate(1);
        return Inertia::render(
            'User/UserList',
            [
                'users' => $users,
            ]
        );
    }
}
