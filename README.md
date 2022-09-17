# node_async_readline
I was trying out a codinGames scrabble challenge game, and tried to test in a local environment.  
The thing that hung me up was that the readline() function they were using had no implementation I could find in Node.  
Turns out there is a common readline you can import/require, but its use is async/promise-based.  
So I tried to solve how to do that instead.  👁️
