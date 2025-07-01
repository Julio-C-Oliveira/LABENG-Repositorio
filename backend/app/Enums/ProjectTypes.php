<?php

namespace App\Enums;

use App\Traits\EnumTrait;

enum ProjectTypes
{
    use EnumTrait;

    case Article;
    case TCC;

    public function label(): string
    {
        return match ($this) {
            self::Article => 'Article',
            self::TCC => 'TCC',
        };
    }
}
