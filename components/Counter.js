'use client';

import { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { increment, decrement, reset, incrementByAmount } from '@/store/slices/counterSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const [incrementValue, setIncrementValue] = useState('2');

  const incrementAmount = Number(incrementValue) || 0;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Redux Counter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <span className="text-4xl font-bold">{count}</span>
        </div>
        
        <div className="flex justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => dispatch(decrement())}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => dispatch(increment())}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => dispatch(reset())}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex space-x-2">
          <Input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(e.target.value)}
            placeholder="Amount"
            className="flex-1"
          />
          <Button
            onClick={() => dispatch(incrementByAmount(incrementAmount))}
            disabled={!incrementAmount}
          >
            Add Amount
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}