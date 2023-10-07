import pandas as pd


class APIConnection:
    def __init__(self):
        self.mapKey = "0a99be10cfebba71b9e96715339da3c1"

    def pull(self):
        url = 'https://firms.modaps.eosdis.nasa.gov/mapserver/mapkey_status/?MAP_KEY=' + self.mapKey
        try:
            df = pd.read_json(url, typ='series')
            print(df)
            return df.to_json()
        except:
            # possible error, wrong MAP_KEY value, check for extra quotes, missing letters
            print("There is an issue with the query. \nTry in your browser: %s" % url)
