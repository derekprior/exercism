module LeapYear(isLeapYear) where

isLeapYear :: Int -> Bool
isLeapYear year
  | year `mod` 4 /= 0   = False
  | year `mod` 400 == 0 = True
  | year `mod` 100 == 0 = False
  | otherwise           = True
