from openai import OpenAI

client = OpenAI(
    api_key = "sk-NMIpYw8Trr4j1PeqEwPomSLSIRG8iKiCDsZL9q9iElnai83E",
    base_url = "https://api.ioii.cn/v1"
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "说说阿里巴巴今后的发展",
        }
    ],
    model="gpt-4-turbo-preview", # 此处更换其它模型,请参考模型列表 eg: google/gemma-7b-it
)
print(chat_completion)
print(chat_completion.choices[0].message.content)