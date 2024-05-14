import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def fn_fast_api():

# -------  INSERER VOTRE CODE ICI -----------------
    
    return {'Key': 'Value'}


# ---------------- FIN DE TON CODE ----------------
#__________________________________________________

if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')