import pandas as pd


class APIConnection:
    def __init__(self):
        self.mapKey = "0a99be10cfebba71b9e96715339da3c1"
        self.countryToCode = {}
        self.loadCountryToCode()
        print(self.countryToCode)

    def loadCountryToCode(self):
        url = countries_url = 'https://firms.modaps.eosdis.nasa.gov/api/countries'
        try:
            df_countries = pd.read_csv(countries_url, sep=';')
            for i in df_countries.index:
                self.countryToCode[df_countries['name'][i]] = df_countries['abreviation'][i]
        except Exception as e:
            print(f"There is an issue with the query: {e}. \nTry in your browser: %s" % url)

    def checkUses(self):
        url = 'https://firms.modaps.eosdis.nasa.gov/mapserver/mapkey_status/?MAP_KEY=' + self.mapKey
        try:
            df = pd.read_json(url, typ='series')
            return df.get(['current_transactions']).to_json()
        except:
            # possible error, wrong MAP_KEY value, check for extra quotes, missing letters
            print("There is an issue with the query. \nTry in your browser: %s" % url)

    def getFireInCountry(self, countryCode: str):
        url = f'https://firms.modaps.eosdis.nasa.gov/api/country/csv/{self.mapKey}/VIIRS_SNPP_NRT/{self.countryToCode[countryCode]}/1'
        try:
            df = pd.read_csv(url)
            print(df)
        except:
            print("There is an issue with the query. \nTry in your browser: %s" % url)