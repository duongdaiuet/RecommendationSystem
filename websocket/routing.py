from django.urls import re_path,path
# from django.conf.urls import url

from . import consumers

websocket_urlpatterns = [
    # re_path(r'ws/notice-signal/(?P<department_group_name>\w+)/$', consumers.NoticeConsumer.as_asgi()),
    # re_path('ws/connect/notice-signal/<department_group_id>/', consumers.NoticeConsumer.as_asgi()),
    # url(r'^ws/connect/notice-signal/(?P<department_group_id>[^/]+)/$', consumers.NoticeConsumer.as_asgi()),
    re_path('ws/notice/', consumers.NoticeConsumer.as_asgi()),
]