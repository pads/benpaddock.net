# A basic configuration.
# `pydoc tiddlyweb.config` for details on configuration items.

config = {
    'system_plugins': ['tiddlywebwiki'],
    'secret': 'fdbf0917990fdccc101d3648384ce6273dde8f4a',
    'twanager_plugins': ['tiddlywebwiki'],
    'server_store': ['tiddlywebplugins.mysql3', {
        'db_config': 'mysql:///tiddlyweb?charset=utf8mb4'}],
    'indexer': 'tiddlywebplugins.mysql3',
    'server_prefix': '/web',
    'log_level': 'DEBUG',
}
