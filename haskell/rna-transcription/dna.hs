module DNA(toRNA) where

import Data.Char

toRNA :: String -> String
toRNA = map nucleotide'

nucleotide' :: Char -> Char
nucleotide' 'G' = 'C'
nucleotide' 'C' = 'G'
nucleotide' 'T' = 'A'
nucleotide' 'A' = 'U'
nucleotide' x = toUpper x
