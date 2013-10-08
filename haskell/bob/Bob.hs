module Bob(responseFor) where

import Data.Char

responseFor :: String -> String
responseFor s
  | isSilentTreatment s = "Fine. Be that way!"
  | isShout s = "Woah, chill out!"
  | isQuestion s = "Sure."
  | otherwise = "Whatever."

isSilentTreatment :: String -> Bool
isSilentTreatment s =  all isSpace s

isQuestion :: String -> Bool
isQuestion s = last s == '?'

isShout :: String -> Bool
isShout s = any isAlpha s && not (any isLower s)
