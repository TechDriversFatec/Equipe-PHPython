# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-03-04 23:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gantt', '0003_auto_20200304_2041'),
    ]

    operations = [
        migrations.CreateModel(
            name='tb_dev_trf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fk_dev_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gantt.tb_desenvolvedor')),
                ('fk_trf_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gantt.tb_tarefa')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='tb_dev_trf',
            unique_together=set([('fk_dev_id', 'fk_trf_id')]),
        ),
    ]
