import os
import sys

# If on a hosting service with Passenger and you want to
# use a custom Python, you may uncomment the following. Change
# INTERP to your preferred Python.
#INTERP = "/home/osmosoft/bin/python"
#if sys.executable != INTERP: os.execl(INTERP, INTERP, *sys.argv)

# you may wish to change this path
# It can also be controlled from mod_wsgi config.
os.environ['PYTHON_EGG_CACHE'] = '/tmp'

def start():
    dirname = os.path.dirname(__file__)
    if sys.path[0] != dirname:
        sys.path.insert(0, dirname)
    from tiddlyweb.web import serve
    app = serve.load_app(app_prefix='', dirname=dirname)
    return app

# web server code will look for a callable # named application
application = start()
