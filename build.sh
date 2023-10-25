#!/bin/sh

set -eux

mkdir -p /opt/buildhome/.yq/bin
wget https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -O /opt/buildhome/.yq/bin/yq
chmod +x /opt/buildhome/.yq/bin/yq
export PATH=$PATH:/opt/buildhome/.yq/bin

curl -fsSL https://deno.land/x/install/install.sh | sh
/opt/buildhome/.deno/bin/deno task build
