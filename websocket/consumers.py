import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer



class NoticeConsumer(WebsocketConsumer):

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.group_name = f'notice_viewapp'
        self.new_distance = None
        self.old_distance = None

    def connect(self):
        self.group_name = f'notice_viewapp'
        # connection has to be accepted


        # join the room group
        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name,
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.group_name,
            self.channel_name,
        )

    def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # send chat message event to the room
        async_to_sync(self.channel_layer.group_send)(
            self.group_name,
            {
                'type': 'notice_viewapp',
                'message': message,
            }
        )

    def notice_viewapp(self, event):
        message = event['message']
        self.send(text_data=json.dumps({
            'message': message,
            'type': 'notice_viewapp',
        }))

    def chat_message(self, event):
        self.send(text_data=json.dumps(event))

