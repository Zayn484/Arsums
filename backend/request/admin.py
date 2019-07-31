from django.contrib import admin

from .models import Request, Message, CallSchedule
# Register your models here.


class RequestAdmin(admin.ModelAdmin):
    list_display=('username', 'timestamp')
    search_fields = ('username', )


class MessageAdmin(admin.ModelAdmin):
    list_display=('firstname', 'lastname', 'email', 'timestamp')
    search_fields = ('firstname', 'lastname', 'email', )


class CallScheduleAdmin(admin.ModelAdmin):
    list_display=('date', 'country', )
    search_fields = ('country', 'region' )


admin.site.register(Request, RequestAdmin)
admin.site.register(Message, MessageAdmin)
admin.site.register(CallSchedule, CallScheduleAdmin)