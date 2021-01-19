# ClemontX.DE - Clock
This is my first Docker-Image!
I was creating this static site back in 2020 to have a clock to show me the local time of the Leipzig Airport (EDDP) and the UTC (Zulu) Time.
## Usage:
`
docker run -tid -p 80:80 clemontx/clock:1.0
`
<br>
To have it running on another local port, just change the first 80 before the `:` to another local machine port you want to use.
