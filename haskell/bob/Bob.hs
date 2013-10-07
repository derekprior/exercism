module Bob where

import Data.Char

responseFor :: String -> String
responseFor s
  | isSilentTreatment s = "Fine. Be that way!"
  | isShout s = "Woah, chill out!"
  | isQuestion s = "Sure."
  | otherwise = "Whatever."

isSilentTreatment :: String -> Bool
isSilentTreatment [] = True
isSilentTreatment s
  | all isSpace s = True
  | otherwise = False

isQuestion :: String -> Bool
isQuestion s = last s == '?'

isShout :: String -> Bool
isShout s = any isAlpha s && map toUpper s == s
