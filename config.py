import os

BASE_DIR = os.path.dirname(__file__)

SQLAKCHEMY_DATABASE_RUI = 'sqlite:///{}'.format(os.path.join(BASE_DIR, 'db01.db'))
SQLAKCHEMY_TRACK_MODIFICATIONS = False
