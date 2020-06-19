<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserNotifications extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user_notifications';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'notifications',
        'status'
    ];
}
