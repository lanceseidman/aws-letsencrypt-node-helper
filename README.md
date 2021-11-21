### Setup IP Tables for redirect

sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8081

### Run Let's Encrypt - Alternative via DNS (Script not needed)
sudo certbot certonly --manual --preferred-challenges dns
