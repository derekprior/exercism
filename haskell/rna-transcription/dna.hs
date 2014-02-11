module DNA(toRNA) where

toRNA :: String -> String
toRNA = map nucleotide'

nucleotide' :: Char -> Char
nucleotide' 'G' = 'C'
nucleotide' 'C' = 'G'
nucleotide' 'T' = 'A'
nucleotide' 'A' = 'U'
nucleotide' _ = error "invalid nucleotide"
