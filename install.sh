git clone https://github.com/gnuboard/gnuboard5.git tmp
rm -rf tmp/.git
mkdir tmp/data

docker cp --archive tmp/. nginx:var/www/html

rm -rf tmp
