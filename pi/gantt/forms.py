from django import forms
from .models import tb_Projeto


class PostProjeto(forms.ModelForm):
    class Meta:
        model = tb_Projeto
        fields = (
            'prj_nome',
            'prj_datainicio',
            'prj_prazoentrega',
            'prj_escopo',
            'prj_color'
        )
