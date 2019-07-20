from django.contrib import admin

from .models import Request
# Register your models here.


class RequestAdmin(admin.ModelAdmin):
    list_display=('username', 'timestamp')
    search_fields = ('username', )


admin.site.register(Request, RequestAdmin)