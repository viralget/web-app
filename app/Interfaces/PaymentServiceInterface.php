<?php

namespace App\Interfaces;

interface PaymentServiceInterface
{
    public function verifyTransaction(string $reference): array;
}
