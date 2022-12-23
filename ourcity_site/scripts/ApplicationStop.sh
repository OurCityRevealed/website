#!/bin/bash

source /website/ourcity_site/scripts/common_variables.sh

pm2 stop 0

systemctl stop nginx