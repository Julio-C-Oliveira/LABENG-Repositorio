<?php

namespace App\Traits;

trait EnumTrait
{
    public static function values(): array
    {
        return array_map(fn($type) => $type->value, static::cases());
    }

    public static function labels(): array
    {
        return array_map(fn($type) => $type->label(), static::cases());
    }

    public function label(): string
    {
        return match ($this) {
            default => $this->value,
        };
    }
}
