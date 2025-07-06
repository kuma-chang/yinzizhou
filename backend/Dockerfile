FROM python:3.13-alpine

WORKDIR /backend

ENV PYTHONUNBUFFERED 1

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

