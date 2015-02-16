module Grains (square, total) where

square :: Integer -> Integer
square 1 = 1
square x = 2 * square (x - 1)

total :: Integer
total = foldl1 addSquare [1..64]

addSquare :: Integer -> Integer -> Integer
addSquare acc x = acc + square x
