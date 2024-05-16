import uvicorn
from fastapi import FastAPI

import pandas as pd
from bs4 import BeautifulSoup
import requests


# FAST CLEANING
df = pd.read_csv(r'C:\WCS\Python\HELLFIRE\0224-protojam-hellfire\data-fastapi\app\testpolution (2).csv', usecols=[
                                                    'Country',
                                                    'Geography',
                                                    'Value'
                                                    ])




app = FastAPI(doc_urls = "/documentation")


@app.get("/")
def root():
    
    return {"message": "Hello World"}


@app.get("/all")
def city():

    return df[['Geography','Value']].set_index('Geography').to_dict()['Value']


@app.get("/all/{country}")
def find_country(country):

    return df[df['Country'] == country].iloc[:,-2:].set_index('Geography').to_dict()['Value']


# ---------------- FIN DE TON CODE ----------------
#__________________________________________________

if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')