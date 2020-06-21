from .models import tb_Projeto, tb_Tarefa, tb_Pessoa, tb_pes_Trf
from rest_framework import serializers


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    # url = serializers.SerializerMethodField()

    class Meta:
        model = tb_Projeto
        fields = (
            'prj_id',
            'prj_nome',
            'prj_datainicio',
            'prj_prazoentrega',
            'prj_escopo',
            'prj_color',
            'prj_cost',
            'prj_hrs_dev',
            'prj_progresso'
        )


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_Tarefa
        fields = (
            'trf_id',
            'trf_name',
            'trf_datainicial',
            'trf_datafinal',
            'trf_prazo',
            'trf_interdependencia',
            'trf_entregavel',
            'trf_progresso',
            'trf_color',
            'fk_prj_id'
        )


class PersonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = tb_Pessoa
        fields = (
            'pes_id',
            'pes_nome',
            'pes_contato'
        )


class DistributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_pes_Trf
        fields = (
            'pes_trf_id',
            'fk_pes_id',
            'fk_trf_id',
        )
