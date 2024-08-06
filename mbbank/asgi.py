"""
ASGI config for mbbank project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mbbank.settings')
import websocket.routing
# from channels.http import AsgiHandler



# application = get_asgi_application()
application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        # "http": AsgiHandler(),
        # Just HTTP for now. (We can add other protocols later.)
        # "websocket": AllowedHostsOriginValidator(
        #     AuthMiddlewareStack(URLRouter(TheNotificationCenterManagement.routing.websocket_urlpatterns))
        # ),
        'websocket': URLRouter(
        websocket.routing.websocket_urlpatterns
        ),
    }
)