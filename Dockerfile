FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/GlobalTechInfo/SUHAIL-XMD /root/SUHAIL-XMD
# RUN rm -rf /root/SUHAIL-XMD/.git
WORKDIR /root/SUHAIL-XMD
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
