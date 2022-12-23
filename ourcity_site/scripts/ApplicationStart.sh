#!/bin/bash

source /website/ourcity_site/scripts/common_variables.sh

pm2 restart 0

systemctl start nginx