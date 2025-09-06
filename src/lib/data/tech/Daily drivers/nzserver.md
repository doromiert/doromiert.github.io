Negative Zero Server
Database
## specs
- cpu: Intel i7 3770
- ram: 16GB DDR3
- motherboard: Lenovo is7xm
- psu: random 700W PSU
- storage: 2TB HDD
<br>

## software
nixos
<br>

## available services (you need an account for those and i don't give them out like candy)
- [jellyfin](https://jellyfin.neg-zero.com)
- [immich](https://immich.neg-zero.com)
- [copyparty](https://copyparty.neg-zero.com)
- [ssh](https://ssh.neg-zero.com)
- [torrents](https://torrent.neg-zero.com)
<br>

# lore
This server started out as my main PC, back in 2020. My parents bought me it (i don't remember for what occasion) with the same specs as it has currently, the difference being that it had an RTX 2060 in it.
<br>
So basically, it was a lenovo thinkstation, but with a new gpu and in a different case. The kind of computer that you should absolutely never buy. But back then, nobody in my family really know how bad of an idea it was.
<br>
<br>
But really, due to its bad performance (gee i wonder why), i replaced it in 2021.
<br>
After that, it sat dormant for a while, collecting dust.
<br>
<br>
But recently, since my free google one hack ran out, i decided to ditch google altogether and switch over to selfhosting my own server. 
<br>
So, i got to work and tried to install NixOS but it kept either failing or not even being detected by the motherboard.
<br>
I wasted a whole day trying to get it to work and turns out linux really didn't like the idea of this motherboard running in UEFI mode, so i set it to run in BIOS mode, which worked.
<br>
<br>
Well, it worked for a while, until it broke down after like one day of usage. The culprit? Faulty SATA cable. 
<br>
But at the time, i didn't know that.
<br>
<br>
So, i bought a 2TB seagate HDD at x-kom for 270zł (btw holy shit, 2tb hdds are so cheap nowadays), came home and put it in the server.
<br>
But it turned out to have the same issues. At first, i thought the HDD itself may be broken or that it might be the motherboard's fault (because MBs designed for prebuilds really don't like hackers) but nope, it was just the SATA cable that was at fault.
<br>
<br>
So i threw out the old cable, got something that works and returned that seagate HDD and installed the old one where it belonged.
<br>
<br>
Then i spent about half a week setting everything up and the rest is history. 