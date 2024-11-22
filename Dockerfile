FROM quay.io/qasimali9263/suhail-xmd:latest
RUN git clone https://github.com/GlobalTechInfo/SUHAIL-XMD.git /root/SUHAIL-XMD
WORKDIR /root/SUHAIL-XMD
RUN npm install
RUN npm install -g pm2
EXPOSE 8000
CMD ["npm","start" ]
