import pandas as pd


class APIConnection:
    def __init__(self):
        self.mapKey = "0a99be10cfebba71b9e96715339da3c1"

    def checkUses(self):
        url = 'https://firms.modaps.eosdis.nasa.gov/mapserver/mapkey_status/?MAP_KEY=' + self.mapKey
        try:
            df = pd.read_json(url, typ='series')
            return df.get('current_transactions').to_json()
        except:
            # possible error, wrong MAP_KEY value, check for extra quotes, missing letters
            print("There is an issue with the query. \nTry in your browser: %s" % url)

    def getFireInCountry(self, countryCode: str):
        url = f'/api/country/csv/0a99be10cfebba71b9e96715339da3c1/VIIRS_SNPP_NRT/{countryCode}/1'
        try:
            df = pd.read_csv(url, sep=";")
            print("df")
        except:
            print("There is an issue with the query. \nTry in your browser: %s" % url)