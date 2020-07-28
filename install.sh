echo "  --------- |     | 0000000    /\    /\     0000   000000000000000000000000000000000000000000000000000000
        |     |_____| 0     0   /  \  /  \   0    0  0                       0000000     0000      00000000
        |     |     | 0     0  /    \/    \  000000  0000000                 0          0    0        0
        |     |     | 0000000 /            \ 0    0         0      \ THE /   0          000000        0
        |                    /              \               0        ___     0000000    0    0        0
        | 000000000000000000000000000000000000000000000000000                                         0
        |                                                                                             0
                                                        --- TH3 H04X"


echo "installing requirements......."

sudo apt-get install curl
sudo curl -sL https://deb.nodesource.com/setup_14.x | bash -
sudo apt-get install -y nodejs

npm install --save puppeteer -g


echo"installation finished"