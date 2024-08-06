import asyncio
from websockets import connect
import json
# from core.settings import DOMAIN_NAME

async def SendUserNotice(uri,content):
    async with connect(uri) as websocket:
        await websocket.send(content)
        await websocket.recv()


NOTICE_USER_URL = f"ws://127.0.0.1:1200/ws/notice/"
def RunSendNoticeUser(distance):
    try:
        uri = NOTICE_USER_URL
        notice_content = json.dumps({
            "message":str(distance),
            "type":"notice_viewapp"
        })
        asyncio.run(SendUserNotice(uri,notice_content))
    except Exception as xx:
        print("gr not exist %s" % str(xx))