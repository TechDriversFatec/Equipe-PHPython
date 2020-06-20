from django.db import models


class tb_Pessoa(models.Model):
    pes_id = models.IntegerField('id', primary_key=True)
    pes_nome = models.CharField('Nome', max_length=90)
    pes_contato = models.BigIntegerField('Contato')


class tb_Projeto(models.Model):
    prj_id = models.IntegerField('id', primary_key=True)
    prj_nome = models.CharField('Nome', max_length=60)
    prj_escopo = models.CharField('Escopo', max_length=119)
    prj_datainicio = models.DateField('Data Inicio')
    prj_prazoentrega = models.DateField('Prazo de Entrega')
    prj_color = models.CharField('Cor', max_length=60, default='')


class tb_Tarefa(models.Model):
    trf_id = models.IntegerField('id', primary_key=True)
    trf_name = models.CharField('nome', max_length=120, default='')
    trf_datainicial = models.DateField('Data Inicial')
    trf_datafinal = models.DateField('Data Final', null=True)
    trf_prazo = models.DateField('Prazo')
    trf_interdependencia = models.IntegerField('Interdenpencia', null=True, default=0)
    trf_entregavel = models.BooleanField('Entregavel', default=False)
    trf_color = models.CharField('cor', max_length=16, default='')
    trf_progresso = models.IntegerField('progresso', default=0, null=True)
    fk_prj_id = models.ForeignKey(tb_Projeto, on_delete=models.CASCADE)

    def __str__(self):
        return self.trf_name


class tb_Dev_Trf(models.Model):
    fk_pes_id = models.ForeignKey(tb_Pessoa, on_delete=models.CASCADE)
    fk_trf_id = models.ForeignKey(tb_Tarefa, on_delete=models.CASCADE)
    fk_prj_id = models.ForeignKey(tb_Projeto, on_delete=models.CASCADE)
    class Meta:
        unique_together = (("fk_pes_id", "fk_trf_id", 'fk_prj_id'),)


class tb_pes_Trf(models.Model):
    pes_trf_id = models.IntegerField('id', primary_key=True)
    fk_pes_id = models.ForeignKey(tb_Pessoa, on_delete=models.CASCADE)
    fk_trf_id = models.ForeignKey(tb_Tarefa, on_delete=models.CASCADE)

    class Meta:
        unique_together = (("fk_pes_id", "fk_trf_id"),)


class tbTeste(models.Model):
    teste = models.CharField(max_length=1)


# Create your models here.
