"""empty message

Revision ID: 47804bea83b4
Revises: 4c52cf5295fb
Create Date: 2021-09-19 18:29:56.723719

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '47804bea83b4'
down_revision = '4c52cf5295fb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('discussion_comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('body', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('dicussion_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['dicussion_id'], ['discussion.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('body')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('discussion_comment')
    # ### end Alembic commands ###
